## FairVoice: An Equitable Audio Deepfake Detector

Welcome to **FairVoice**, a collaborative research and development project focused on equitable audio deepfake detection. This project aims to address challenges in detecting manipulated audio in a way that is fair and equitable. 

This repository contains my contributions to the project, which is part of a larger team effort. You can find the original project repository [here](https://github.com/madfields17/Capstone_2025).

Below is a breakdown of the key folders and their contents, specific to my contributions.

## 📂 Folder Breakdown

### [`datasets`](https://github.com/madfields17/Capstone_2025/tree/trisha-branch/datasets)
This folder contains:
- Basic **exploratory data analysis (EDA)** notebooks to get a feel for the data.
- The **directory structure** used by scripts and models for training/inference.

> **Note:** Due to licensing restrictions, the actual datasets are not included here. You’ll need to place them in the expected directory structure if you want to reproduce any results.

### [`tssdnet`](https://github.com/madfields17/Capstone_2025/tree/trisha-branch/tssdnet)
This folder contains:
- Core scripts for training and evaluating our **Res-TSSDNet model**.
- Notebooks for analysis and comparison between the **baseline model** and our **fine-tuned version**.
- Model configurations, performance metrics, and some tuning experiments.

> The Res-TSSDNet is a temporal object detection model we're using for equitable audio deepfake detection - feel free to dig into the code or reach out if you're curious!

### [`web-app`](https://github.com/madfields17/Capstone_2025/tree/trisha-branch/web-app)
This folder contains:
- A lightweight **React-based web app** for visualizing results and interacting with the model.
- Routing, component structure, and integration with model outputs.
- Assets and styling for the static site.

> A deployed version is live [here on Vercel](https://capstone-web-app-six.vercel.app/). Feel free to take a look!
