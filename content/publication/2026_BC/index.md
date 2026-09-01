---
design:
  css_style: 'custom'
  css_class: 'custom'

title: "Does it add up? Reconciling forecasts and Impulse responses for hierarchical macroeconomic data"
authors:
- admin
- Clara Krause
author_notes:
- "Equal contribution"
- "Equal contribution"
date: "2026-08-27T00:00:00Z"
doi: "10.4419/96973409"

# Schedule page publish date (NOT publication's date).
publishDate: "2026-08-31T00:00:00Z"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["report"]

# Publication name and optional abbreviated publication name.
publication: "*Ruhr Economic Papers, 1224*(1)"
publication_short: ""

abstract: This paper introduces a mixed-frequency Gaussian state-space Framework that embeds forecast reconciliation into Bayesian VAR modeling for hierarchical macroeconomic data. Using precision-based sampling to generate high-frequency latent estimates, we construct a consistent proxy for the forecast-error covariance matrix, enabling optimal reconciliation with short datasets. We prove the asymptotic convergence of this estimator and show that forecast reconciliation can be formally derived as a special case of conditional forecasting, allowing straightforward implementation with Standard state-space algorithms. We derive reconciled impulse response functions (rIRFs) that ensure bottom-level structural responses aggregate exactly to the top-level impulse response. Applying the framework to UK and German regional economic data, we demonstrate improvements in the forecast accuracy alongside structurally consistent impulse responses

# Summary. An optional shortened abstract.
summary: 

tags:
- Forecast
featured: true

# links:
# - name: ""
#   url: ""
url_pdf: https://www.rwi-essen.de/fileadmin/user_upload/RWI/Publikationen/Ruhr_Economic_Papers/REP_26_1224.pdf
url_code: ''
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: 'Blagov_Krause_2025_IAAEslides.pdf'
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
projects: []

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: example
---


Regional forecasts should add up to the national forecast. In reality they often don't as each region makes their own forecasts. Also in structural analyses, regional shock responses can drift so far apart from the national response that the numbers no longer add up at all.

In our new working paper, we show how to fix this. Together with Clara Krause, we introduce a method for hierarchical macroeconomic data: the forecasts are made consistent with each other, and at the same time more accurate. Using UK data and state-of-the art techniques that model all regions jointly our density forecasts improve by up to 20%. Using German data and modelling each region individually we get up to 50% lower forecast errors, both point and density. 50% compared to the state-of-the-art models.

Why this matters: budget planning doesn't wait for the data. Regional governments plan the next fiscal year in Sep-Dec – while the most recent official regional data only goes back to the previous year. Yep, even the current year is not out there when they need a good forecast. Consistent, up-to-date forecasts are therefore not a nice-to-have, but a necessity. 