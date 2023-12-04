---
tags:
  - journal
sleep: 
water: 
weather:
  precip: 0
  type: 
glucose_07:
---

<< [[<% tp.date.now("YYYY-MM-DD", -1) %>]] |  [[Journal/<% tp.date.now("YYYY") %>/Monthly/<% tp.date.now("MM-MMMM") %>|<% tp.date.now("MM-MMMM") %>]] | [[<% tp.date.now("YYYY-MM-DD", 1) %>]] >> 

### Weather

<% tp.user.openweather('API_KEY', 'LOCATION_ID') %>

### Wisdom

<% tp.web.daily_quote() %>

### Day in Review

### Mindlessness


## Tasks

### Done Today

```tasks
done on <% tp.date.now("YYYY-MM-DD") %>
```