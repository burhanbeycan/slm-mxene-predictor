# SLM-MXene: Small Language Model for MXene Property Prediction

**Author:** Dr. Burhan Beycan  
**Affiliation:** Middle East Technical University, Ankara, Türkiye  
**Contact:** burhanbeycan@hotmail.com

---

## Overview

This repository contains the source code for the academic project website **SLM-MXene**, which focuses on leveraging **Small Language Models (SLMs)** to predict key properties of **MXene materials**. The website serves as a professional presentation of the project's motivation, methodology, and preliminary results, and includes a functional demo of the property predictor.

---

## Project Highlights

*   **Dual Expertise:** A perfect blend of **Materials Science** (MXene research) and **Artificial Intelligence** (SLM implementation).
*   **Efficiency:** SLMs offer a balance of high performance and computational efficiency for rapid materials screening.
*   **Interactive Demo:** A web-based interface to simulate real-time MXene property prediction.
*   **Modern Web Stack:** Built with **React** and **Tailwind CSS** for a professional, responsive, and modern academic presentation.

---

## Methodology

The project's core methodology involves treating the chemical composition and structural descriptors of MXenes as a 'chemical language' that the SLM learns to interpret and correlate with target properties.

1.  **Data Curation:** Compiling a comprehensive dataset of MXene compositions and properties.
2.  **Representation Learning:** Developing text-based representations (e.g., Ti<sub>3</sub>C<sub>2</sub>(OH)<sub>2</sub>) for the SLM input.
3.  **SLM Fine-tuning:** Utilizing a pre-trained, lightweight language model fine-tuned for regression tasks (e.g., predicting bandgap).
4.  **Target Properties:** Electronic Bandgap (E<sub>g</sub>), Work Function (Φ), and Formation Energy (ΔH<sub>f</sub>).

---

## Deployment Instructions (GitHub Pages)

This project is a static website built with React and can be easily deployed using GitHub Pages.

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/YOUR_USERNAME/slm-mxene-predictor.git
    cd slm-mxene-predictor
    ```
2.  **Push to GitHub:**
    *   If you are starting from scratch, create a new repository on GitHub named `slm-mxene-predictor`.
    *   Initialize and push the code:
        ```bash
        git init
        git remote add origin https://github.com/YOUR_USERNAME/slm-mxene-predictor.git
        git add .
        git commit -m "Initial commit: SLM-MXene React Website"
        git branch -M main
        git push -u origin main
        ```
3.  **Enable GitHub Pages:**
    *   Go to your repository on GitHub.
    *   Navigate to **Settings** -> **Pages**.
    *   Under "Build and deployment," select **Deploy from a branch**.
    *   Choose the `main` branch and the `/ (root)` folder, then click **Save**.

Your website will be live at `https://YOUR_USERNAME.github.io/slm-mxene-predictor/` within a few minutes.

---

## Local Development

To run the project locally:

1.  **Install Dependencies:**
    ```bash
    pnpm install
    # or npm install / yarn install
    ```
2.  **Start Development Server:**
    ```bash
    pnpm run dev
    ```
    The site will be available at `http://localhost:5173`.

---

## Technologies Used

*   **Frontend:** React, JavaScript (JSX)
*   **Styling:** Tailwind CSS, shadcn/ui
*   **Build Tool:** Vite

---

## License

This project is licensed under the MIT License.

---

## Acknowledgments

Developed by Dr. Burhan Beycan as a demonstration of advanced research capabilities in materials informatics.

