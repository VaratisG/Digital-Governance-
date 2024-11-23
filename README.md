# University Studies Certificate Issuance Dialog System

This project is a dialog system designed to assist with the public service of issuing a university studies certificate. The system has been developed as a case study following the provided template for public service dialog systems and adheres to the requirements specified in the project guidelines.

## Overview

This dialog system serves the information stage of a public service, specifically aimed at helping users understand their eligibility for the certificate and guiding them through the necessary steps. It is based on a similar case study created for the Mobility Card Service, which includes a questionnaire and a set of frequently asked questions (FAQs) to assist citizens.

### Template Reference:
The system's design draws inspiration from a case study example, which you can explore here.

## Features

### 1. FAQ Section
The system includes 2-3 frequently asked questions with their corresponding answers related to the university studies certificate.

### 2. Interactive Dialog Flow
A multi-step conversation is implemented, guiding users through 3-4 steps to complete the process. Each step has branching outcomes based on the user's input.

### 3. Eligibility Information
The system checks whether users meet the requirements to receive the certificate.

### 4. Online Deployment
The service is hosted online for easy access.

### 5.Source Code Availability
The source code is open-source and available in this repository.

## Navigating the Project

The project structure is as follows:

```sh
project
│
├── index.html # Main HTML file
├── styles.css # Custom CSS styles
├── js/
│ ├── jquery-functions.js # Custom jQuery functions to fetch Questions, Evidences, FAQs and to handle answers in the questionnaire
│ └── change-language-functions.js # Language switch functions
├── questions-utils/
│ ├── all-questions-en.json # has all questions&answers in english
│ ├── all-questions.json # has all questions&answers in greek
│ ├── cpsv-en.json # has all Evidences in english
│ ├── cpsv.json # has all Evidences in greek
│ ├── faq-en.json # has all FAQs questions&answers in english
│ ├── faq.json # has all FAQs questions&answers in greek
└── README.md # Project documentation
```

## How to Access the Service

### 1. Online Service
The dialog system is deployed online. Access it here.

### 2. GitHub Repository
View the source code in this repository: GitHub Link.



