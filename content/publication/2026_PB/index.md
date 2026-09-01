---
design:
  css_style: 'custom'
  css_class: 'custom'

title: "Improving inference and forecasting in VAR models using cross-sectional information"
authors:
- admin
- Jan Prüser
author_notes:
- "Equal contribution"
- "Equal contribution"
date: "2026-01-27T00:00:00Z"
doi: "10.1016/j.econmod.2026.107618"

# Schedule page publish date (NOT publication's date).
publishDate: "2026-02-31T00:00:00Z"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["Journal article"]

# Publication name and optional abbreviated publication name.
publication: "Economic Modelling Vol 160, 107618"
publication_short: ""

abstract: We propose a prior for VAR models that exploits the panel structure of macroeconomic time series while also providing shrinkage towards zero to address overfitting concerns. The prior is flexible as it detects shared dynamics of individual variables across endogenously determined groups of countries. We demonstrate the usefulness of our approach in three applications. In the first, using a euro area dataset, we demonstrate that combining pairwise pooling with zero shrinkage helps with structural analysis by lowering the estimation uncertainty. In the second application, we use artificial data to study the bias–variance trade-off between pooling, zero shrinkage and no regularization. If the countries are similar, pooling leads only to a small bias but still provides a large reduction in the estimation variance. Finally, we use a real dataset of a large group of heterogeneous countries to demonstrate that combining pairwise pooling with zero shrinkage can improve out-of-sample forecasting relative to only zero shrinkage or only pooling specifications.

# Summary. An optional shortened abstract.
summary: 

tags:
- Bayesian VAR
- Cross-sectional shrinkage
- Forecasting
featured: false

# links:
# - name: ""
#   url: ""
url_pdf: https://www.sciencedirect.com/science/article/pii/S0264999326001471/pdfft?md5=a9e0c645ea30f74fbe46b217b5a2c2fb&pid=1-s2.0-S0264999326001471-main.pdf
url_code: 'https://github.com/borisblagov/Blagov_Prueser_2026_Replication'
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: ''
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
- Business_Cycle_Analysis

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: example
---


Macroeconomic time series are short, so estimating a separate VAR for each country runs the risk of overfitting and imprecise inference. The standard remedy — the Minnesota prior — shrinks all coefficients towards zero. But this ignores a valuable source of information: many countries exhibit similar dynamics, at least for some variables. Euro area member states, for example, share a common monetary policy, so interest rates and inflation dynamics are strongly integrated, while labour markets and industry structures are very different.

The idea. Together with Jan Prüser, I propose a prior for panels of country-specific VARs that combines both ingredients: the popular Minnesota prior (zero shrinkage) and a flexible pooling prior that pulls the coefficients of each country's VAR towards those of the other countries. Pooling operates pairwise and coefficient by coefficient, so that only subsets of countries — and only some variables within them — are pooled. How strongly coefficients of two countries are pooled is determined endogenously through a two-step empirical Bayes procedure, which also reveals which country pairs, and hence clusters, exhibit similar dynamics. From a frequentist perspective, the prior penalizes both deviations from zero and deviations between countries' coefficients — and, because it is pairwise, information also flows indirectly: pooling country 1 with country 2 and country 2 with country 3 implicitly pools country 1 with country 3.

Why both, not just one? Pooling alone borrows strength across countries but can be outperformed by a simple single-country VAR when countries are heterogeneous; zero shrinkage alone borrows no cross-country information at all. We show that the data prefer the combination.

We have three applications that show the strengths of our method and here are the main results to them:

1. Structural analysis (10 large euro area countries, 2000Q1–2019Q4): A formal model comparison (deviance information criterion) favors the combination of pooling and zero shrinkage over either zero shrinkage alone or pooling alone. The combined prior yields much narrower credibility intervals: single-country Bayesian VARs cannot distinguish the output response to a contractionary monetary policy shock from zero, whereas the combined prior estimates the effect of an interest rate hike precisely enough that the credibility interval of the output response excludes zero in all periods — under both recursive identification and sign restrictions.
2. Monte Carlo experiments (three DGPs, from similar to identical countries): Zero shrinkage and pooling each reduce estimation variance relative to a flat prior, and combining both further increases precision. When countries are similar, pooling introduces only a small bias while delivering large variance reductions.
3. Forecasting (15 countries, 1979Q2–2019Q4, horizons up to eight steps ahead): The combination of zero shrinkage and pooling outperforms the Minnesota-prior benchmark in most cases for GDP, inflation, and interest rates — and substantially outperforms popular panel VAR specifications with pooling priors. Approaches that rely on pooling alone, by contrast, often underperform the simple single-country Minnesota VAR, underscoring the importance of zero shrinkage to mitigate overfitting.

