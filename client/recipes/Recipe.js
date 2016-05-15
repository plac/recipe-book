Template.Recipe.onCreated(function () {
  this.editMode = new ReactiveVar(false);
});

Template.Recipe.helpers({
  updateRecipeId: function () {
    return this._id;
  },
  editMode: function () {
    return Template.instance().editMode.get();
  }
});

Template.Recipe.events({
  "click .toggle-menu": function(event, template){
     Meteor.call('toggleManuItem', this._id, this.inMenu);
  },
  "click .fa-thrash": function (event, template) {
    Meteor.call('deleteRecipe', this._id);
  },
  "click .fa-pencil": function (event, template) {
    template.editMode.set(!template.editMode.get());
  }
});
