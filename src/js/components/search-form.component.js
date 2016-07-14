class SearchFormCtrl {
  constructor($state, $attrs) {
    'ngInject';

    this._$state = $state;
    this.autofocus = $attrs.autofocus;
    this.limitSeriesSearch = 0;

    this.data = [
      { name: 'A Song of Ice and Fire', author: ['George RR Martin'], keywords: 'Game of Thrones', slug:'a-song-of-ice-and-fire'},
      { name: 'Foundation', author: ['Isaac Asimov'], keywords: '', slug:'foundation'},
      { name: 'Wheel of Time', author: ['Robert Jordan', 'Brandon Sanderson'], slug: 'wheel-of-time'},
      { name: 'Brandon Sanderson', slug: 'brandon-sanderson'}
    ];
  };

  // https://github.com/angular-ui/ui-select/issues/88#issuecomment-179916133
  checkSearch(search) {
    this.limitSeriesSearch = (search.length > 1)? 9999 : 0;
  }

  submit() {
    if(this.selectedItem) {
      this._$state.go('app.graph', { slug: this.selectedItem.slug, isAuthor: !this.selectedItem.author });
    }
  };
}

let SearchForm = {
  controller: SearchFormCtrl,
  transclude: true,
  templateUrl: 'components/search-form.html'
};

export default SearchForm;
