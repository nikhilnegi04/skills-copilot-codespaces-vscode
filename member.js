function skillsMember() {
  var member = {
    name: 'John Doe',
    age: 30,
    skills: ['js', 'html', 'css'],
    showSkills: function() {
      var _this = this;
      this.skills.forEach(function(skill) {
        console.log(_this.name + ' knows ' + skill);
      });
    }
  };
  member.showSkills();
}