const $ = require('jquery')
const html = require('choo/html')

module.exports = (state, send) => {
  const submit = (e) => {
    e.preventDefault()

    const $el = $(e.currentTarget)
    const query = $el.find('[name=search]').val()

    send('repositories:get', { query })
  }

  const onChange = (e) => {
    const search = $(e.currentTarget).val()

    send('ui:searchInput', { search })
  }

  return html `
    <form class="search-form" onsubmit=${submit}>
      <p class="control has-icon">
        <input class="input is-medium" type="search" name="search" value="${state.ui.search.input}" onchange=${onChange} placeholder="What do you wanna search for?!" autocomplete="off" />
        <i class="fa fa-search"></i>
      </p>
    </form>
  `
}
