var current = []
var minLitness = 100
$(function() {
  $(document).on('change', function(evt) {
    minLitness = evt.target.value
    blessed()
  })
  var blessed = function() {
  console.log('blessed')
    $.get('https://www.reddit.com/r/hiphopheads/hot/.json?count=20', function(res) {
      $('.litbody').empty()
      current = res.data.children 
      current.map(function(item) {
        if (item.data.title.toLowerCase().indexOf('[fresh') === -1) return
        if (item.data.ups < minLitness) return
        var toAppend = '<div class="lititem"><a target="_blank" href="' + 'http://www.reddit.com' + item.data.permalink + '"><div class="lititem__title">' + item.data.title + '</div></a></div>' 
        $('.litbody').append(toAppend)
      })
    }) 
  }
  blessed()
})
