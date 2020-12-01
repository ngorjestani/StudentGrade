$(document).ready(function () {
    $("form").submit(calculateGrade);

    function calculateGrade(event) {
        event.preventDefault();

        var student = {};

        student.firstName = $("#first-name").val();
        student.lastName = $("#last-name").val();
        student.pointsEarned = $("#points-earned").val();
        student.pointsPossible = $("#points-possible").val();


        var percentage = (student.pointsEarned / student.pointsPossible) * 100;
        var grade;

        if (percentage >= 93) {
            grade = "A";
        } else if (percentage >= 90) {
            grade = "A-";
        } else if (percentage >= 87) {
            grade = "B+";
        } else if (percentage >= 83) {
            grade = "B";
        } else if (percentage >= 80) {
            grade = "B-";
        } else if (percentage >= 77) {
            grade = "C+";
        } else if (percentage >= 73) {
            grade = "C";
        } else if (percentage >= 70) {
            grade = "C-";
        } else if (percentage >= 67) {
            grade = "D+";
        } else if (percentage >= 63) {
            grade = "D";
        } else if (percentage >= 60) {
            grade = "D-";
        } else {
            grade = "F";
        }

        $("#first-name-output").text(student.firstName);
        $("#last-name-output").text(student.lastName);
        $("#percentage-output").text(percentage.toFixed(0) + "%");
        $("#grade-output").text(grade);
        $("#results").show();
    }

});