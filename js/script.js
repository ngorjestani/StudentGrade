$(document).ready(function () {
    var listOfStudents = [];

    $("form").submit(addStudent);
    $("#sort-name").click(sortByName);
    $("#sort-percent").click(sortByPercent);


    function addStudent(event) {
        event.preventDefault();

        var student = {};

        student.firstName = $("#first-name").val();
        student.lastName = $("#last-name").val();
        student.pointsEarned = $("#points-earned").val();
        student.pointsPossible = $("#points-possible").val();


        student.percentage = (student.pointsEarned / student.pointsPossible) * 100;

        if (student.percentage >= 93) {
            student.grade = "A";
        } else if (student.percentage >= 90) {
            student.grade = "A-";
        } else if (student.percentage >= 87) {
            student.grade = "B+";
        } else if (student.percentage >= 83) {
            student.grade = "B";
        } else if (student.percentage >= 80) {
            student.grade = "B-";
        } else if (student.percentage >= 77) {
            student.grade = "C+";
        } else if (student.percentage >= 73) {
            student.grade = "C";
        } else if (student.percentage >= 70) {
            student.grade = "C-";
        } else if (student.percentage >= 67) {
            student.grade = "D+";
        } else if (student.percentage >= 63) {
            student.grade = "D";
        } else if (student.percentage >= 60) {
            student.grade = "D-";
        } else {
            student.grade = "F";
        }

        listOfStudents.push(student);

        $("#results").empty();

        for (var s of listOfStudents) {
            var output = `${s.firstName} ${s.lastName} | ${s.percentage.toFixed(0)}% | ${s.grade} <br>`;
            $("#results").append(output)
        }
        $("#results").show();
    }

    function nameSort(n1, n2) {
        if (n1.lastName < n2.lastName) {
            return -1;
        } else if (n1.lastName > n2.lastName) {
            return 1;
        } else {
            return 0;
        }
    }

    function sortByName(event) {
        event.preventDefault();

        listOfStudents.sort(nameSort);

        $("#results").empty();

        for (var s of listOfStudents) {
            var output = `${s.firstName} ${s.lastName} | ${s.percentage.toFixed(0)}% | ${s.grade} <br>`;
            $("#results").append(output);
        }
        $("#results").show();
    }

    function percentSort(n1, n2) {
        if (n1.percentage < n2.percentage) {
            return -1;
        } else if (n1.percentage > n2.percentage) {
            return 1;
        } else {
            return 0;
        }
    }

    function sortByPercent(event) {
        event.preventDefault();

        listOfStudents.sort(percentSort);

        $("#results").empty();

        for (var s of listOfStudents) {
            var output = `${s.firstName} ${s.lastName} | ${s.percentage.toFixed(0)}% | ${s.grade} <br>`;
            $("#results").append(output);
        }
        $("#results").show();
    }
});