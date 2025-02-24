---
# Leave the homepage title empty to use the site title
title: ""
date: 2024-10-24
type: landing


design:
  css_style: 'custom'
  css_class: 'custom'

design:
  # Default section spacing
  spacing: "3rem"

sections:
  - block: resume-biography-3
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
      text: ""
      # Show a call-to-action button under your biography? (optional)
#      button: 
#        text: Download CV
#        url: uploads/resume.pdf
    design:
      css_class: light
      background:
        color: white
        image:
          # Add your image background to `assets/media/`.
#          filename: stacked-peaks.svg
          filters:
            brightness: 1.0
          size: cover
          position: center
          parallax: false
    # Customize the section spacing. Order is top, right, bottom, left.
    padding: ['40px', '0', '0', '0']
#  - block: markdown
#    content:
#      title: '📚 My Research'
#      subtitle: ''
#      text: |-
#        Use this area to speak to your mission. I'm a research scientist in the Moonshot team at DeepMind. I blog about machine learning, deep learning, and moonshots.
#
#        I apply a range of qualitative and quantitative methods to comprehensively investigate the role of science and technology in the economy.
#        
#        Please reach out to collaborate 😃
#    design:
#      columns: '1'

  - block: collection
    id: blog
    content:
      title: Blog
      subtitle: ''
      text: ''
      # Page type to display. E.g. post, talk, publication...
      page_type: post
      # Choose how many pages you would like to display (0 = all pages)
      count: 0
      # Filter on criteria
      filters:
        author: ""
        category: ""
        tag: ""
        exclude_featured: false
        exclude_future: true
        exclude_past: false
        publication_type: ""
      # Choose how many pages you would like to offset by
      offset: 0
      # Page order: descending (desc) or ascending (asc) date.
      order: desc
    design:
      # Choose a layout view
      view: date-title-summary
      # Reduce spacing
      spacing:
        padding: [0, 0, 0, 0]

  - block: collection
    id: research
    content:
      title: Research
      text: ""
      filters:
        folders:
          - publication
        exclude_featured: false
    design:
      view: article-grid

      
  - block: collection
    id: forecast
    content:
      title: Latest Forecasts
      filters:
        folders:
          - forecast
        featured_only: false
    design:
      view: article-grid
      columns: 1


---
