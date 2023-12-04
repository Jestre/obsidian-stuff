---
tag: journal/monthly/<% tp.date.now("YYYY") %>
---

≫ [[Journal]] / [[Journal/<% tp.date.now("YYYY") %>/§Index - <% tp.date.now("YYYY") %>|§Index - <% tp.date.now("YYYY") %>]]  /  <% tp.date.now("MM-MMMM") %>


### Sleep

```tracker
searchType: frontmatter
searchTarget: sleep
startDate: <% moment().startOf('month').format('YYYY-MM-DD') %>
endDate: <% moment().endOf('month').format('YYYY-MM-DD') %>
folder: Journal/<% tp.date.now('YYYY/MM') %>
datasetName: Sleep
line:
    title: "Sleep"
    yAxisLabel: "Time (24h)"
    lineColor: red
    showPoint: true
    showLegend: false
    xAxisTickLabelFormat: DD
```


### Water

```tracker
searchType: frontmatter
searchTarget: water
datasetName: Water
folder: Journal/<% tp.date.now('YYYY/MM') %>
month:
    startWeekOn: 'Sun'
    threshold: 60
    color: tomato
    headerMonthColor: orange
    dimNotInMonth: false
    todayRingColor: orange
    selectedRingColor: steelblue
    showSelectedValue: true
```
```tracker
searchType: frontmatter
searchTarget: water
folder: Journal/<% tp.date.now("YYYY") %>/<% tp.date.now("MM") %>
summary:
    template: "Maximum: {{max()}} ounces  --  Total: {{sum()}} ounces\n"
    style: "font-size:16px;color:yellow;margin-left: 50px;margin-top:00px;"
```

### Glucose - Fasting
```tracker
searchType: frontmatter
searchTarget: glucose_07
startDate: <% moment().startOf('month').format('YYYY-MM-DD') %>
endDate: <% moment().endOf('month').format('YYYY-MM-DD') %>
folder: Journal/<% tp.date.now('YYYY/MM') %>
datasetName: Glucose
line:
    title: "Fasting Glucose"
    yAxisLabel: "mg/dL"
    lineColor: red
    showPoint: true
    showLegend: false
    xAxisTickLabelFormat: DD
```
## Notes


## Daily Entries

```dataview
LIST 
FROM "Journal/<% tp.date.now('YYYY/MM') %>"
SORT file.name
```
