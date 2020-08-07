---
title: "Async Js"
description: "This is imported from readme of ulka"
date: 2020-2-24
---

{% const axios = require('axios') %}
{% const remarkable = require('remarkable') %}

{%
    const Remarkable = remarkable.Remarkable
    const md =  new Remarkable({ html: true })
%}

{%= axios.get('https://raw.githubusercontent.com/ulkajs/ulka/master/README.md').then(function(res){
    return md.render(res.data)
}) %}
