---
title: The effects of COVID-19 on the Italian economy
subtitle: ""
summary: This is an excerpt from our [2020 spring economic forecast](https://www.rwi-essen.de/media/content/pages/publikationen/rwi-konjunkturberichte/rwi-kb_1-2020.pdf)
authors:
- admin
tags: ["Forecasts"]
categories: []
date: "2020-03-23T11:00:00"
lastMod: "2020-04-01T11:00:00"
featured: false
draft: false

#links:
#- name: "Slides"
#  url: https://www.dropbox.com/s/vmjbko3fxpjxo8i/Blagov_ERU_Slides.pdf?dl=0

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  caption: ""
  focal_point: ""

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references
#   `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []
---

_Disclaimer: This is a loose translation of the analysis "The effects of COVID-19 on the Italian economy" which was published in the [RWI Spring international forecast](https://www.side-iea.it/sites/side-iea.it/files/iceee2019lecce_final_program.pdf). The analysis was finalized on the 19th of March 2020 and therefore does not include newer developments. This translation is my own and is therefore not affiliated with RWI - Leibniz Institute for economic research in any way. All the errors are my own._

## Summary

Assuming that
* production in Italy will fall by 20% and remain at that level for two months
* International arrivals and overnight stays will decline by 75% (the rest attributed to essential travel)
* Consumption will fall by 50% (proxied by new car registrations)
we estimate that Italian GDP will contract by 2,4% instead of growing with 0,2%

## Background

In the  we analysed the effects of nationwide lockdown in Italy on its economy. Italy was, at the time, the hardest hit economy by the new strand of coronavirus. The high number of deaths compared to the number of confirmed infections suggested that COVID-19 has remained undiscovered for some time. Thus, it may very well be that a portion of the population might be carrying the virus unbeknownst to them. Therefore, the Italian government introduced a number of stringent measures in order to contain the virus.

* On the 3-rd of March Italy ordered the temporary closure of schools and universities until 15 March. It is also advised to cancel or postpone all major public meetings until 3 April.
* On the 8-th of March, large parts of northern Italy, such as Lombardy and 14 other provinces, were quarantined, also until 3rd of April. These measures were later extended to the whole country.
* Since 11-th March all shops except grocery stores remain closed
* _After the publication of the forecast Italy has introduced a total lockdown of the country_

The measures are likely to have a massive impact on the Italian economy. In addition to quarantine, the tourism sector, which accounts for 13% of Italy's GDP and employs 8 million people, will continue to suffer from the effects of the virus even after the quarantine measures have ended.


## Modelling strategy

To estimate the economic effects of these drastic measures, we use a cutting edge econometric model, namely, a mixed-frequency VAR (MF-VAR) model analogous to Schorfheide and Song (2015) (for a brief description see also Döhrn et al. 2018).

We capture the effects in the following manner. First we choose a range of economic variables that cover all areas of the Italian economy where possible. Then
1. Using data **prior** to the outbreak we do a forecast for Gross domestic product and Personal consumption. This is our **counterfactual scenario** - what would have happened if COVID-19 did not paralyse the economy.
2. Making an educated guess regarding the developments of key variables under the current circumstances, create a new forecast. This is our **Covid-19 scenario**.

The difference between the two is our expectation of the effects.

## Data

The model includes three quarterly variables and twelve monthly indicators. These have been selected to cover all areas of the Italian economy where possible. Specifically, the following variables are used:
* Production: GDP (quarterly), gross fixed capital formation (quarterly), industrial production and new orders
* Survey-based measures:  IHS Markit Purchasing Managers Index, Economic Sentiment Index and Industrial Confidence Index
* Preise: Consumer Price Index and Producer Price index
* Labour market: Unemployment rate and Employment
* Consumption: Private Consumption (quarterly), Retail Sales and New car registration
* Tourism: Number of tourist arrivals and number of hotel nights
 Data used are from 2000 onwards. Monthly data are available until December 2019 and January 2020 respectively, survey results are already available until February 2020. Quarterly variables extend to the fourth quarter of 2019

## Establishing the counterfactual scenario (without COVID-19)

The available data do not currently cover the period from the outbreak of the COVID-19 epidemic in Italy. Therefore, the data are suitable for counterfactual nowcasting. We use the model to forecast all variables, which represent a hypothetical alternative scenario of a development that would have occurred if Italy had not been covered by COVID-19. The forecasts are shown in red on the figures below. Industrial production falls slightly in February, but then recovers again. The upward trend in tourist arrivals continues. The number of overnight stays is also gradually increasing. These forecasts, together with the already available strong growth in industrial production in January, suggest that GDP will expand by 0.2% in the first quarter. For the remainder of the forecast period, there will be a slower increase in overall economic activity for the rest of the year.  Overall, this alternative scenario results in **an annual average increase in GDP of 0.2%**.


## The effects of COVID-19 on the Italian economy

In view of the latest developments in Italy - confirmed COVID-19 cases in all regions, quarantine in Northern Italy and a general travel ban as well as the cancellation of major events and store closures - we assume the following assumptions regarding the current economic development
1. The number of international arrivals and overnight stays will fall sharply by 75% for March and April and will not begin to recover until May. We attribute the remaining 25% of international arrivals to necessary travel.
2. The level of industrial production plummets, is 20% lower in March than in January, and remains unchanged in April.
3. Car registrations fall by 50% in March and, like industrial production, remain at this level for another month.

We plot those assumptions on Figure 1.

{{< figure src="Counterfactual_monthly.png" title="Assumptions on the effects of COVID-19 on industrial production, new arrivals, overnight stays and car registrations (red) and conuterfactual scenario (blue)." numbered="true" lightbox="true" >}}

Based on the experience of the quarantine measures taken in China (Wu & McGoogan 2020), we expect the situation to get better from May onwards. In the three months past May there will be a return to the original level of the four variables. In tourism, the level of both variables remains about 5% below the counterfactual scenario in the summer. With the help of an MF-VAR these variables are forecast for the period from October 2020 onwards. In Figure 1, the developments are shown in blue. An overshoot over the values of the counterfactual scenario is to be expected for industrial production and new car registrations.

Figure 2 shows the model forecasts for GDP and private consumption. If the virus had not spread, both aggregates would have risen at decreasing rates, but consistently. Under the assumptions made here, the spread of COVID-19 is likely to reduce real GDP and private consumption significantly in the first half of the year. In the second half of the year, expansion rates should then be well above potential rates due to catch-up effects. All in all, the overall economic activity in Italy is expected to decline by 2.4% this year. In contrast, GDP and consumer spending will rise by 0.2% in the alternative scenario, while private consumption is likely to decline by 0.9% in 2020. This results in a **negative GDP effect of COVID-19 of about 2.6% on GDP** and **1.1% on private consumption.**

{{< figure src="Counterfactual_quarterly.png" title="The effects of COVID-19 on Gross domestic product (left) and Personal consumption (right) in red versus the counterfactual scernaio in blue." numbered="true" lightbox="true" >}}

This forecast is based on the key assumptions of fall in production by 20%, tourism by 75%, and consumption for larger assets such as cars by 50%. In the light of the current situation these values appear optimistic, thus we may observe an even sharper decline.