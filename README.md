# 🌐 Amazon Translate Demo

[![AWS](https://img.shields.io/badge/AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)](https://aws.amazon.com)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

> A modern translation application powered by Amazon Translate service with AWS Lambda and a sleek frontend interface.

## ✨ Features

- 🌍 **Multi-language Support**: Translate between multiple languages
- 🔍 **Auto Detection**: Automatically detect source language
- 💅 **Modern UI**: Clean interface with Tailwind CSS
- ⚡ **Serverless**: Powered by AWS Lambda
- 🔒 **Secure**: CORS enabled and AWS IAM protected

## 🚀 Quick Start

1. **📦 Install Dependencies**
   ```bash
   cd translate
   npm install @aws-sdk/client-translate
   ```

2. **⚡ Deploy**
   ```bash
   sam build
   sam deploy --guided
   ```

3. **🎨 Update Frontend**
   - Open `translate/index.html`
   - Replace `ENTER YOUR API ENDPOINT URL HERE` with your API Gateway URL

## 📋 Prerequisites

- 🏢 AWS Account
- 🛠️ AWS SAM CLI
- 💻 Node.js & npm
- 📦 AWS SDK v3

## 🧹 Cleanup

```bash
sam delete
```

## 📚 Documentation

For detailed setup instructions and implementation details, check out the article:
[Create a Translation Application with Amazon Translate](https://ozers.medium.com/create-a-translation-application-with-amazon-translate-3d7949149952)

---

<div align="center">
  <sub>Built with ❤️ by Ozer Subasi</sub>
</div>
