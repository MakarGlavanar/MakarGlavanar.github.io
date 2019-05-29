$(document).ready(function () {
    // Stars and description
    fillTitles();
    buildDescription();
    
    // Load icons
    $(".ic-telegram").load("./src/ic_telegram.html");
    $(".ic-vkontakte").load("./src/ic_vkontakte.html"); 

    // Fill titles with stars on window resize
    $(window).on('resize', fillTitles);

    // Init mail form
    mailService();

    animateCommands();
});

function animateCommands () {
    var commands = $('.command');
    var recursionInProgress = false;
    var commandIndex = 0;

    function startConsoleSimulation () {
        if (commandIndex >= commands.length) {
            recursionInProgress = false;
            return;
        }
        
        onViewportEnter(commands[commandIndex], function (element) {
            recursionInProgress = true;
            simulateInput(element, function () {
                if (element.attributes["resultId"]) {
                    var commandResultId = element.attributes["resultId"].value;
                    var commandResult = $("#" + commandResultId)[0];
                    if (commandResult) {
                        commandResult.style.display = "block";
                    };
                }
                
                commandIndex ++;
                recursionInProgress = false;
                startConsoleSimulation();
            });
        });
    };

    startConsoleSimulation();
    
    $(window).on('scroll resize', function () {
        console.log(recursionInProgress);
        if (recursionInProgress === false) {
            commandIndex = 0;
            for (let i = 0; i < commands.length; i ++) {
                if (!commands[i]._enteredViewport) {
                    commandIndex = i;
                    startConsoleSimulation();
                    break;
                }
            }
        }
    });
};

function simulateInput (element, callback) {
    var commandText = element.children[1];
    if (commandText) {
        var value = commandText.innerHTML;
        var charsCount = value.length;
        var charIndex = 0;

        commandText.innerHTML = "";
        commandText.style.visibility = "visible";

        var interval = setInterval(function() {
            if (charIndex < charsCount) {
                commandText.innerHTML += value[charIndex];
                charIndex ++;
            } else {
                clearInterval(interval);
                callback();
            }
        }, 20);
    }
};

function mailService () {
    var form = $('.view.form')[0];
    var emailGroup = $('#contact-email')[0];
    var emailInput = $('.input[name="contact_email"]')[0];
    var messageGroup = $('#contact-message')[0];
    var messageInput = $('.input[name="contact_message"]')[0];

    $(form).submit(function (e) {
        e.preventDefault();
    });

    $(form).hover(function () {
        emailInput.focus();
    });

    $(emailInput).bind('keypress', function (e) {
        if (e.key === "Enter") {
            messageGroup.style.display = "block";
            messageInput.focus();
        }
    });

    $(messageInput).bind('keypress', function (e) {
        if (e.key === 'Enter') {
            emailGroup.style.display = 'none';
            messageGroup.style.display = 'none';

            $('#contact-success')[0].style.display = 'block';
        }
    });
};

function fillTitles () {
    var titles = $(".title");

    for (var i = 0; i < titles.length; i++) {
        let windowWidth = window.innerWidth;

        let titleTextWidth = titles[i].children[1].offsetWidth;

        let starsCount = parseInt((windowWidth - titleTextWidth) / 6.33 / 2);

        titles[i].children[0].innerHTML = "";
        titles[i].children[2].innerHTML = "";

        for (var j = 0; j < starsCount; j++) {
            titles[i].children[0].innerHTML += "*";
            titles[i].children[2].innerHTML += "*";
        }

        titles[i].style.width = "100%";
        titles[i].style.whiteSpace = "nowrap";
        titles[i].style.overflow = "hidden";
        titles[i].style.margin = "16px auto";
    }
};

function buildDescription () {
    function buildSpan (text, color) {
        return '<span class="json__span_' + color + '">' + text + '</span>';
    };
    
    $.get("./src/desc.json", function(data) {
        let jsonHTML = "";

        jsonHTML += buildSpan("{", "purple") + "\n";

        for (let property in data) {
            if (typeof data[property] !== "object") {
                jsonHTML +=
                    "\t" +
                    buildSpan(`"${property}"`, "orange") +
                    buildSpan(`: `, "white") +
                    buildSpan(`"${data[property]}"`, "green") +
                    buildSpan(`,`, "white") +
                    "\n";
            } else {
                jsonHTML +=
                    "\t" +
                    buildSpan(`"${property}"`, "orange") +
                    buildSpan(`: [ `, "white");

                for (let _prop in data[property]) {
                    jsonHTML +=
                        buildSpan(`"${data[property][_prop]}"`, "green") +
                        buildSpan(`, `, "white");
                }

                jsonHTML +=
                    buildSpan(` ],`, "white") +
                    "\n";
            }
        }

        jsonHTML += buildSpan("}", "purple");

        const description = $(".json")[0];

        description.innerHTML = jsonHTML;
    });
};