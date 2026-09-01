---
design:
  css_style: 'custom'
  css_class: 'custom'

title: "Economic Knock-On Effects of Russia’s Geopolitical Risk on Advanced Economies: A Global VAR Approach"
authors:
- admin
- Maximilian Dirks
- Michael Funke
author_notes:
- "Equal contribution"
- "Equal contribution"
- "Equal contribution"
date: "2025-10-29T00:00:00Z"
doi: "10.1017/S1365100525100552 "

# Schedule page publish date (NOT publication's date).
publishDate: "2026-01-31T00:00:00Z"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["article-journal"]

# Publication name and optional abbreviated publication name.
publication: "_Macroeconomic Dynamics_ Vol 29, e153"
publication_short: ""

abstract: Using a Bayesian Global VAR model as a methodological tool, we analyze how heightened geopolitical risk shocks propagate across advanced economies and quantify the economic effects of these events. The global VAR impulse response functions in response to the skyrocketing Russian geopolitical risk after Russia’s invasion of Ukraine revealed a contraction of GDP and an increase in inflation. Eastern European and Baltic countries are particularly affected by the Russian geopolitical risk shock. We also document a strong component of the Russian geopolitical risk shock that is not driven by fossil fuel prices.

# Summary. An optional shortened abstract.
summary: 

tags:
- Uncertainty
featured: false

# links:
# - name: ""
#   url: ""
url_pdf: https://www.cambridge.org/core/journals/macroeconomic-dynamics/article/economic-knockon-effects-of-russias-geopolitical-risk-on-advanced-economies-a-bayesian-global-var-approach/A636B2EFC867E319D7A12821838BE374
url_code: ''
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
projects: []

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: example
---


## Motivation

After decades of deepening globalization, the Russian invasion of Ukraine in February 2022 constitutes a turning point (a "Zeitenwende") in global economic relations, highlighting how geopolitical risk (GPR) can upset hydrocarbon supply chains and lead to the weaponization of international trade. Geopolitical considerations had already gained importance before 2022 — the US–China trade war and military tensions around the Taiwan Strait and the South China Sea are prime examples — and governments and firms now seek to reduce economic dependencies that could be exploited for geopolitical gain. The response ranges from governmental de-risking initiatives to firms shifting production toward blocs of like-minded countries ("nearshoring" or "friendshoring"), moving from "just in time" to "just in case" supply chains.

Reshaping global supply chains comes at a cost. Estimates of the macroeconomic impact of geopolitical fragmentation vary widely, from a manageable 0.2% reduction in global GDP to declines of 2–7%, depending on the extent of fragmentation. Against this backdrop, the paper makes three contributions. First, it revisits the relationship between geopolitical risk originating from Russia and the business cycles of advanced economies. Second, it provides evidence on the cross-country transmission of geopolitical shocks: despite the prominence of the issue, empirical work on the economic knock-on effects of the war in Ukraine has been scarce. Third, while much of the existing literature analyzes the effects of GPR on specific asset markets, the paper focuses on the macroeconomic repercussions of Russian GPR shocks. To our knowledge, it presents the first application of a multi-country Bayesian Global Vector Autoregression (BGVAR) to the geopolitical risk issue.

## Idea

Geopolitical risk is measured with the text-mining-based GPR indices of Caldara and Iacoviello (2022), which identify war threats, military buildups, and terrorist acts in the archives of ten major international newspapers. The Russia-specific index lines up well with known events — the Chechen wars, the 2008 war in Georgia, the 2014 Euromaidan and Crimean annexation, and recurring Donbas flare-ups (long-run average about 0.8, standard deviation 0.6) — and spiked to 5.2 in the quarter of the invasion, a jump of seven standard deviations. A worldwide map of the 2022–2024 average GPR levels shows that the global rise in risk is largest in the countries geographically closest to the Russian–Ukrainian battleground.

The central premise is that heightened uncertainty feeds through into real economic activity: uncertainty causes businesses and consumers to postpone investment and consumption decisions. Russian GPR is thus part of an "uncertainty triumvirate" alongside economic and policy uncertainty. A further key idea is that the overall shock can be decomposed into the "weaponized" fossil fuel price component and all remaining GPR-induced impediments to growth. This is achieved by entering a fossil fuel price index (the HWWI Energy Raw Materials Price Index, weighted 70% crude oil, 8% coal, 22% natural gas) alongside the GPR index as a second global variable.

## Method

The paper estimates a BGVAR in the spirit of Boeck et al. (2022). Twenty-six countries — the seven G7 economies and Norway modeled individually, plus four clusters (the Baltics, the Nordics, Central and Eastern Europe, and the remaining EEA countries) — are each modeled as a VARX with one own lag (selected via the Bayesian information criterion), augmented with trade-weighted averages of foreign variables (weights from the Atlas of Economic Complexity) and with global variables. The Russian GPR index and the fossil fuel price index are modeled in a "dominant unit" and enter all country equations. The unit-specific models are combined into a single global system in which all countries mutually affect each other; the sparse GVAR parameterization keeps the number of parameters independent of the number of countries and thereby bypasses the curse of dimensionality. To capture volatile episodes such as the pandemic and the war, unit residuals follow a stochastic volatility process.

The model is estimated with a Bayesian MCMC approach using the Minnesota prior (50,000 draws, 35,000 discarded, Geweke convergence diagnostics). Weak exogeneity of the foreign and global variables, as well as serial autocorrelation and cross-unit correlation of the residuals, are verified with standard tests. Following the state of the art for high-dimensional systems, the GPR shock is identified locally in the dominant unit, while the responses of all other units are of the generalized type. Impulse responses (GIRFs) and forecast error variance decompositions (GFEVDs) are computed over the posterior and are invariant to variable ordering. Data are quarterly (2000Q1–2024Q1) and comprise economic expectations (PMI / Economic Sentiment Index), real GDP, real consumption, real investment, CPI/HICP, and the shadow short rate. The baseline shock corresponds to the seven-standard-deviation increase in the Russian GPR index observed in the wake of the invasion.

## Findings

1. **A contractionary supply shock of invasion magnitude.** A shock equal to the 2022 GPR spike produces a profound and encompassing reduction of economic activity across all countries. The GDP decline becomes statistically significant after about four quarters, deepens until roughly the twelfth quarter, and it takes more than two years for the knock-on effects to subside. CPI reacts more quickly: a sharp inflationary response lasting about twelve quarters is followed by a gradual reversal.

2. **Transmission channels.** The shock propagates through the trade channel, with decreasing terms of trade, through deteriorating business expectations, wait-and-see investment behavior, precautionary savings, and a subsequent tightening of monetary policy. Notably, fossil fuel prices rise sharply — in contrast to the oil price decline found by Caldara and Iacoviello (2022) for general GPR shocks — reflecting Russia's central role in world energy markets.

3. **Cross-country heterogeneity.** The spillovers are largest for countries geographically close to Russia and with strong economic ties to it, particularly the Baltics and Central and Eastern Europe, which are also heavily exposed to energy prices (2022 CPI inflation in the Baltics reached 17–19%, far above the 8.4% euro-area average). At the other end of the spectrum, the US, Canada, Japan — and, despite its proximity, Norway — show the smallest responses, consistent with their status as energy exporters or weak entanglement with Russian energy markets. In general, spillovers are amplified by above-average trade with Russia, high trade concentration, low export diversification, high energy import dependence, and weak external buffers.

4. **Quantifying the aggregate impact.** For the PPP-weighted aggregate of the 26 countries, the shock lowers GDP by 2–3% per quarter and raises inflation by 1–2% per quarter over the first two years. In the FEVDs, the Russian GPR shock explains roughly 4% of GDP forecast error variance and up to 10% of inflation forecast error variance, underscoring that the war in particular triggered an inflationary episode.

5. **The magnitude of geopolitical risk matters.** Robustness exercises show that pre-invasion GPR shocks — the 2014 Crimean annexation (estimated on a pre-pandemic sample) and the pandemic-era sample — had little to no significant effect on GDP or inflation, in sharp contrast to the full-blown war and consistent with the comparatively mild 2014 sanctions. The baseline results are therefore not a pandemic artifact, and augmenting the model with the VIX does not change the supply-shock classification or the cross-country pattern.

## Conclusion and Implications

The paper provides evidence that geopolitical risk originating from Russia constitutes a macroeconomic shock that propagates worldwide through trade and energy channels, and that its economic consequences depend crucially on the magnitude of the risk and on each country's exposure. The results add to the literature on the economic ramifications of wars (Glick and Taylor, 2010; Caldara et al., 2022) and, in a broader context, speak to the economic costs of the geopolitical challenges facing the Euro-Atlantic region. They also carry direct policy implications: while economies are adaptive — European countries managed to switch from Russian pipeline gas to LNG — the key question for de-risking strategies is whether they can be implemented without a prolonged, growth-reducing "decoupling."
