Template.appChat.helpers({
	messages: function () {
		return Messages.find({}, {sort: {createdAt: -1}, limit: 10})
	}
});

Template.appChat.events({
	"click .btnDelete": function (event) {
		Messages.remove(this._id);
		return false;
	},
	"keyup .txtbirth": function (event) {

		if(event.keyCode == 13){
			Messages.insert({
				num: $(".txtnum").val(),
				course: $(".txtcourse").val(),
				name: $(".txtname").val(),
				age: $(".txtage").val(),
				gender: $(".txtgender").val(),
				stat: $(".txtstat").val(),
				birth: $(".txtbirth").val(),
				createdAt: new Date()
			});

			//$(".txtText").val("");
			//$(".txtText").focus();
		}
		return false;
	}
});