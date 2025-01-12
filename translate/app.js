const { TranslateClient, TranslateTextCommand } = require("@aws-sdk/client-translate");

const translate = new TranslateClient({ region: process.env.AWS_REGION });

const ERROR_MESSAGES = {
    INVALID_JSON: "Invalid JSON in Request Body!",
    MISSING_PARAMS: "Text and Target parameters are required!",
    TRANSLATION_ERROR: "An error occurred during translation!"
};

const createResponse = (statusCode, body) => ({
    statusCode,
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify(body)
});

exports.lambdaHandler = async (event) => {
    let body;
    try {
        body = JSON.parse(event.body);
    } catch (parseError) {
        return createResponse(400, {
            error: ERROR_MESSAGES.INVALID_JSON
        });
    }

    try {
        const { text, source, target } = body;

        if (!text || !target) {
            return createResponse(400, {
                error: ERROR_MESSAGES.MISSING_PARAMS
            });
        }

        const params = {
            Text: text,
            SourceLanguageCode: source || 'auto',
            TargetLanguageCode: target
        };

        const command = new TranslateTextCommand(params);
        const response = await translate.send(command);

        return createResponse(200, {
            translatedText: response.TranslatedText,
            sourceLanguage: response.SourceLanguageCode,
            targetLanguage: target
        });

    } catch (error) {
        console.error('Translation error:', error);
        return createResponse(500, {
            error: ERROR_MESSAGES.TRANSLATION_ERROR
        });
    }
};