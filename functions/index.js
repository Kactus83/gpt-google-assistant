const { actionssdk, SimpleResponse } = require('actions-on-google');
const express = require('express');
const bodyParser = require('body-parser');

const openai = require('openai');
openai.apiKey = "votre_clé_api_openai";