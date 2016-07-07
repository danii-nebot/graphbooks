class SearchFormCtrl {
  constructor($state) {
    'ngInject';

    this._$state = $state;

    this.series = [
      { title: 'A Song of Ice and Fire', author: 'George RR Martin', keywords: 'Game of Thrones', slug:'a-song-of-ice-and-fire'},
      { title: 'Foundation', author: 'Isaac Asimov', keywords: '', slug:'foundation'},
      { title: 'Wheel of Time', author: 'Robert Jordan', slug: 'wheel-of-time'}
    ];
  };

  submit() {
    if(this.selectedItem) {
      this._$state.go('app.graph', { slug: this.selectedItem.slug });
    }
  };
}

let SearchForm = {
  controller: SearchFormCtrl,
  transclude: true,
  templateUrl: 'components/search-form.html'
};

export default SearchForm;
