import { lambdaHandler } from '../../app.js';
import { expect } from 'chai';

describe('Translate Function Tests', () => {
    it('should return 400 when text is missing', async () => {
        const event = {
            body: JSON.stringify({
                target: 'tr'
            })
        };

        const response = await lambdaHandler(event);
        expect(response.statusCode).to.equal(400);
        expect(JSON.parse(response.body).error).to.equal('text and target parameters are required');
    });

    it('should return 400 when target is missing', async () => {
        const event = {
            body: JSON.stringify({
                text: 'Hello'
            })
        };

        const response = await lambdaHandler(event);
        expect(response.statusCode).to.equal(400);
        expect(JSON.parse(response.body).error).to.equal('text and target parameters are required');
    });

    it('should handle invalid JSON in request body', async () => {
        const event = {
            body: 'invalid-json'
        };

        const response = await lambdaHandler(event);
        expect(response.statusCode).to.equal(400);
        expect(JSON.parse(response.body).error).to.equal('Invalid JSON in request body');
    });

    // Note: This is a mock test. In real scenario, we would mock AWS Translate client
    it('should handle successful translation', async () => {
        const event = {
            body: JSON.stringify({
                text: 'Hello',
                target: 'tr'
            })
        };

        const response = await lambdaHandler(event);
        expect(response.statusCode).to.equal(200);
        const body = JSON.parse(response.body);
        expect(body).to.have.property('translatedText');
        expect(body).to.have.property('sourceLanguage');
        expect(body).to.have.property('targetLanguage');
    });
});