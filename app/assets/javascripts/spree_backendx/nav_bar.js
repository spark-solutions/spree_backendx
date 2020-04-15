$(document).ready(function() {
  var searchIcons = document.querySelectorAll('#admin-nav-bar .search-icons')[0]
  var searchDropdown = document.getElementById('admin-search-dropdown')

  if (searchIcons !== undefined) {
    searchIcons.addEventListener(
      'click',
      toggleSearchBar,
      false
    )
  }

  function toggleSearchBar() {
    if (searchDropdown.classList.contains('shown')) {
      document.querySelector('.admin-header-spree').classList.remove('above-overlay')
      document.getElementById('overlay').classList.remove('shown')
      searchDropdown.classList.remove('shown')
    } else {
      document.querySelector('.admin-header-spree').classList.add('above-overlay')
      document.getElementById('overlay').classList.add('shown')
      searchDropdown.classList.add('shown')
      document.querySelector('#admin-search-dropdown input').focus()
    }
  }
})
