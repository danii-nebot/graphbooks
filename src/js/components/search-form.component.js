class SearchFormCtrl {
  constructor($state) {
    'ngInject';

    this._$state = $state;
    this.formData = {};

    this.series = [
      { title: 'A Song of Ice and Fire', author: 'George RR Martin', keywords: 'Game of Thrones', slug:'a-song-of-ice-and-fire'},
      { title: 'Foundation', author: 'Isaac Asimov', keywords: '', slug:'foundation'}
    ];
  };

  reset() {
    this.formData.slug = '';
    this.autocompleteActive = true;
  }

  select(series) {
    this.formData.seriesName = series.title;
    this.formData.slug = series.slug;
    this.autocompleteActive = false;
  }

  submit() {
    if(this.formData.seriesName) {
      let slug = this.formData.slug || this.slugify(this.formData.seriesName);
      this._$state.go('app.graph', {slug: slug});
    }
  };

  slugify(text)
  {
    return text.toString().toLowerCase()
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      .replace(/\-\-+/g, '-')         // Replace multiple - with single -
      .replace(/^-+/, '')             // Trim - from start of text
      .replace(/-+$/, '');            // Trim - from end of text
  }

};

let SearchForm = {
  controller: SearchFormCtrl,
  transclude: true,
  templateUrl: 'components/search-form.html'
};

export default SearchForm;
