# AWS Translate Demo

This project demonstrates the usage of AWS Translate service with a serverless architecture using AWS Lambda and a simple frontend interface.

## Project Structure

```
translator-aws/
├── translate/
│   ├── app.js         # Lambda function handler
│   └── index.html     # Frontend interface
└── README.md
```

## Features

- Text translation between multiple languages
- Auto language detection
- Simple and responsive UI using Tailwind CSS
- Serverless backend using AWS Lambda
- CORS enabled for cross-origin requests

## Prerequisites

- AWS Account
- [AWS SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html) installed
- Node.js and npm installed
- AWS SDK v3 for JavaScript

## Setup

1. **Install Dependencies**
   ```bash
   cd translate
   npm install @aws-sdk/client-translate
   ```

2. **Deploy with SAM**
   ```bash
   # Build the application
   sam build

   # Deploy the application
   sam deploy --guided
   ```

   During the guided deployment, you'll be asked to provide:
   - Stack Name (e.g., translator-aws)
   - AWS Region
   - Confirm changes before deploy
   - Allow SAM CLI IAM role creation
   - Save arguments to samconfig.toml

   The deployment will:
   - Create a Lambda function with the necessary IAM role and permissions
   - Set up an API Gateway with CORS enabled
   - Output the API endpoint URL

3. **Frontend Setup**
   - Open `translate/index.html`
   - Replace `ENTER YOUR API ENDPOINT URL HERE` with the API Gateway endpoint URL from the SAM deployment output
   - The URL will look like: `https://xxxxxx.execute-api.region.amazonaws.com/Prod/translate/`

## Usage

1. Open `translate/index.html` in a web browser
2. Enter the text you want to translate in the "Source Text" field
3. Select source language (or leave as "Auto Detect")
4. Select target language
5. Click "Translate" button
6. The translated text will appear in the "Translation" field

## Supported Languages

- English (en)
- Turkish (tr)
- Spanish (es)
- French (fr)
- German (de)
- Italian (it)
- Japanese (ja)

## Error Handling

The application handles various error cases:
- Invalid JSON in request body
- Missing required parameters
- Translation service errors

## Security

- CORS headers are properly configured
- AWS credentials are managed through IAM roles
- Environment variables are used for configuration

## Cleanup

To remove all AWS resources created by this project:

```bash
sam delete
```

This command will:
- Delete the CloudFormation stack
- Remove the Lambda function
- Remove the API Gateway
- Clean up all associated resources

Note: If you saved your configuration in `samconfig.toml`, the command will use those settings. Otherwise, you'll need to specify the stack name:

```bash
sam delete --stack-name <your-stack-name>
```

## License

This project is open source and available under the MIT License.
