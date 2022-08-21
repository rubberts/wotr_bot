const TOOLTIP_AGGRESSIVE = "<div class=\"tooltip\"><i>Aggressive</i><span class=\"tooltiptext\"><ul><li>The army of an active nation whose value = opposing army value; or</li><li>an army which has hit the stacking limit and contains the Witch King or 5 leadership.</li></ul></span></div>";
const TOOLTIP_EXPOSED = "<div class=\"tooltip\"><i>Exposed</i><span class=\"tooltiptext\">An empty target that a Shadow army’s shortest path to is clear of enemy armies.</span></div>";
const TOOLTIP_FULL_HAND = "<div class=\"tooltip\"><i>Full hand</i><span class=\"tooltiptext\">Holding the maximum number of allowed cards.</span></div>";
const TOOLTIP_GARRISON = "<div class=\"tooltip\"><i>Garrison</i><span class=\"tooltiptext\">An army inside a stronghold or in a stronghold region.</span></div>";
const TOOLTIP_MOBILE = "<div class=\"tooltip\"><i>Mobile</i><span class=\"tooltiptext\">An army which can move towards its target without creating threat and: <ol><li>is aggressive against its closest target, or one within the same national border, and all armies on the shortest route to it; or</li><li>would turn a passive siege aggressive at its closest target; or</li><li>has hit the stacking limit.</li><ol></span></div>";
const TOOLTIP_PASSIVE = "<div class=\"tooltip\"><i>Passive</i><span class=\"tooltiptext\">An army that is not aggressive.</span></div>";
const TOOLTIP_PREFERRED_CORRUPTION = "<div class=\"tooltip\"><i>Preferred</i><span class=\"tooltiptext\">Cards with a character symbol.</span></div>";
const TOOLTIP_PREFERRED_MILITARY = "<div class=\"tooltip\"><i>Preferred</i><span class=\"tooltiptext\">Cards with an army or muster symbol.</span></div>";
const TOOLTIP_PRIMARY = "<div class=\"tooltip\"><i>Primary</i><span class=\"tooltiptext\">The muster region closest to the defined target or army.</span></div>";
const TOOLTIP_SECONDARY = "<div class=\"tooltip\"><i>Secondary</i><span class=\"tooltiptext\">The muster region closest to the primary.</span></div>";
const TOOLTIP_TARGET = "<div class=\"tooltip\"><i>Target</i><span class=\"tooltiptext\">Order of priority when tied for distance:<ol><li>Conquered Shadow stronghold.</li><li>Free Peoples’ army creating threat.</li><li>Stronghold not currently under siege by a mobile Shadow army:<ul><li>Nation at war</li><li>Active nation</li><li>Passive nation</li></ul></li><li>Unconquered Free Peoples’ city:<ul><li>Nation at war</li><li>Active nation</li></ul></li><li>Lowest value garrison.</li></ol></span></div>";
const TOOLTIP_THREAT = "<div class=\"tooltip\"><i>Threat</i><span class=\"tooltiptext\">A region which contains:<ul><li>An active nation Free Peoples’ army within 2 regions of an unconquered Shadow stronghold with a higher value than the Shadow garrison. Exclude Free Peoples’ garrisons; or</li><li>less than 4 hit points of Shadow units are in the Orthanc garrison with Saruman, and the Ent faction is in play or WoME is not in use and Gandalf the White is in play and a companion is in Fangorn.</li></ul></span></div>";
const TOOLTIP_VALUE = "<div class=\"tooltip\"><i>Value</i><span class=\"tooltiptext\">Point rating of army calculated as:<ul><li>+1 for each hit point</li><li>+1 for each combat die including Captain of the West (capped at 5)</li><li>+1 for each point of leadership (capped at lower of 5 or total army units)</li><li>+1 for each Captain of the West</li><li>+1 for defending in a fortification or city region</li><li>x1.5 (rounded down) for defending in a stronghold<ul><li>Mobile and threat always use this even if no siege is occurring</li><li>HP multiplied for only the five strongest units in the region</li></ul></li><li>x0.5 for sorties (rounded down)</li><li>Exclude Saruman from value when calculating if an army is mobile</li></ul></span></div>";

const TOOLTIP_AGGRESSIVE_L = "<div class=\"tooltip\"><i>aggressive</i><span class=\"tooltiptext\"><ul><li>The army of an active nation whose value = opposing army value; or</li><li>an army which has hit the stacking limit and contains the Witch King or 5 leadership.</li></ul></span></div>";
const TOOLTIP_EXPOSED_L = "<div class=\"tooltip\"><i>exposed</i><span class=\"tooltiptext\">An empty target that a Shadow army’s shortest path to is clear of enemy armies.</span></div>";
const TOOLTIP_FULL_HAND_L = "<div class=\"tooltip\"><i>full hand</i><span class=\"tooltiptext\">Holding the maximum number of allowed cards.</span></div>";
const TOOLTIP_GARRISON_L = "<div class=\"tooltip\"><i>garrison</i><span class=\"tooltiptext\">An army inside a stronghold or in a stronghold region.</span></div>";
const TOOLTIP_MOBILE_L = "<div class=\"tooltip\"><i>mobile</i><span class=\"tooltiptext\">An army which can move towards its target without creating threat and: <ol><li>is aggressive against its closest target, or one within the same national border, and all armies on the shortest route to it; or</li><li>would turn a passive siege aggressive at its closest target; or</li><li>has hit the stacking limit.</li><ol></span></div>";
const TOOLTIP_PASSIVE_L = "<div class=\"tooltip\"><i>passive</i><span class=\"tooltiptext\">An army that is not aggressive.</span></div>";
const TOOLTIP_PREFERRED_CORRUPTION_L = "<div class=\"tooltip\"><i>preferred</i><span class=\"tooltiptext\">Cards with a character symbol.</span></div>";
const TOOLTIP_PREFERRED_MILITARY_L = "<div class=\"tooltip\"><i>preferred</i><span class=\"tooltiptext\">Cards with an army or muster symbol.</span></div>";
const TOOLTIP_PRIMARY_L = "<div class=\"tooltip\"><i>primary</i><span class=\"tooltiptext\">The muster region closest to the defined target or army.</span></div>";
const TOOLTIP_SECONDARY_L = "<div class=\"tooltip\"><i>secondary</i><span class=\"tooltiptext\">The muster region closest to the primary.</span></div>";
const TOOLTIP_TARGET_L = "<div class=\"tooltip\"><i>target</i><span class=\"tooltiptext\">Order of priority when tied for distance:<ol><li>Conquered Shadow stronghold.</li><li>Free Peoples’ army creating threat.</li><li>Stronghold not currently under siege by a mobile Shadow army:<ul><li>Nation at war</li><li>Active nation</li><li>Passive nation</li></ul></li><li>Unconquered Free Peoples’ city:<ul><li>Nation at war</li><li>Active nation</li></ul></li><li>Lowest value garrison.</li></ol></span></div>";
const TOOLTIP_THREAT_L = "<div class=\"tooltip\"><i>threat</i><span class=\"tooltiptext\">A region which contains:<ul><li>An active nation Free Peoples’ army within 2 regions of an unconquered Shadow stronghold with a higher value than the Shadow garrison. Exclude Free Peoples’ garrisons; or</li><li>less than 4 hit points of Shadow units are in the Orthanc garrison with Saruman, and the Ent faction is in play or WoME is not in use and Gandalf the White is in play and a companion is in Fangorn.</li></ul></span></div>";
const TOOLTIP_VALUE_L = "<div class=\"tooltip\"><i>value</i><span class=\"tooltiptext\">Point rating of army calculated as:<ul><li>+1 for each hit point</li><li>+1 for each combat die including Captain of the West (capped at 5)</li><li>+1 for each point of leadership (capped at lower of 5 or total army units)</li><li>+1 for each Captain of the West</li><li>+1 for defending in a fortification or city region</li><li>x1.5 (rounded down) for defending in a stronghold<ul><li>Mobile and threat always use this even if no siege is occurring</li><li>HP multiplied for only the five strongest units in the region</li></ul></li><li>x0.5 for sorties (rounded down)</li><li>Exclude Saruman from value when calculating if an army is mobile</li></ul></span></div>";

(function(storyContent) {

    document.body.classList.add("switched");
    document.body.classList.toggle("dark");

    // Create ink story from the content using inkjs
    var story = new inkjs.Story(storyContent);

    var savePoint = "";

    let savedTheme;
    let globalTagTheme;

    // Global tags - those at the top of the ink file
    // We support:
    //  # theme: dark
    //  # author: Your Name
    var globalTags = story.globalTags;
    if( globalTags ) {
        for(var i=0; i<story.globalTags.length; i++) {
            var globalTag = story.globalTags[i];
            var splitTag = splitPropertyTag(globalTag);

            // THEME: dark
            if( splitTag && splitTag.property == "theme" ) {
                globalTagTheme = splitTag.val;
            }

            // author: Your Name
            else if( splitTag && splitTag.property == "author" ) {
                var byline = document.querySelector('.byline');
                byline.innerHTML = "by "+splitTag.val;
            }
        }
    }

    var storyContainer = document.querySelector('#story');
    var outerScrollContainer = document.querySelector('.outerContainer');

    // page features setup
    setupTheme(globalTagTheme);
    var hasSave = loadSavePoint();
    setupButtons(hasSave);

    // Set initial save point
    savePoint = story.state.toJson();

    // Kick off the start of the story!
    continueStory(true);

    // Main story processing function. Each time this is called it generates
    // all the next content up as far as the next set of choices.
    function continueStory(firstTime) {

        var paragraphIndex = 0;
        var delay = 0.0;

        // Don't over-scroll past new content
        var previousBottomEdge = firstTime ? 0 : contentBottomEdgeY();

        // Generate story text - loop through available content
        while(story.canContinue) {

            // Get ink to generate the next paragraph
            var paragraphText = story.Continue();
            var tags = story.currentTags;

            // Any special tags included with this line
            var customClasses = [];
            for(var i=0; i<tags.length; i++) {
                var tag = tags[i];

                // Detect tags of the form "X: Y". Currently used for IMAGE and CLASS but could be
                // customised to be used for other things too.
                var splitTag = splitPropertyTag(tag);

                // AUDIO: src
                if( splitTag && splitTag.property == "AUDIO" ) {
                  if('audio' in this) {
                    this.audio.pause();
                    this.audio.removeAttribute('src');
                    this.audio.load();
                  }
                  this.audio = new Audio(splitTag.val);
                  this.audio.play();
                }

                // AUDIOLOOP: src
                else if( splitTag && splitTag.property == "AUDIOLOOP" ) {
                  if('audioLoop' in this) {
                    this.audioLoop.pause();
                    this.audioLoop.removeAttribute('src');
                    this.audioLoop.load();
                  }
                  this.audioLoop = new Audio(splitTag.val);
                  this.audioLoop.play();
                  this.audioLoop.loop = true;
                }

                // IMAGE: src
                if( splitTag && splitTag.property == "IMAGE" ) {
                    var imageElement = document.createElement('img');
                    imageElement.src = splitTag.val;
                    storyContainer.appendChild(imageElement);

                    showAfter(delay, imageElement);
                    delay += 200.0;
                }

                // LINK: url
                else if( splitTag && splitTag.property == "LINK" ) {
                    window.location.href = splitTag.val;
                }

                // LINKOPEN: url
                else if( splitTag && splitTag.property == "LINKOPEN" ) {
                    window.open(splitTag.val);
                }

                // BACKGROUND: src
                else if( splitTag && splitTag.property == "BACKGROUND" ) {
                    outerScrollContainer.style.backgroundImage = 'url('+splitTag.val+')';
                }

                // CLASS: className
                else if( splitTag && splitTag.property == "CLASS" ) {
                    customClasses.push(splitTag.val);
                }

                // CLEAR - removes all existing content.
                // RESTART - clears everything and restarts the story from the beginning
                else if( tag == "CLEAR" || tag == "RESTART" ) {
                    removeAll("p");
                    removeAll("button");
                    removeAll("img");

                    // Comment out this line if you want to leave the header visible when clearing
                    setVisible(".header", false);

                    if( tag == "RESTART" ) {
                        restart();
                        return;
                    }
                }
            }

            // Create paragraph element (initially hidden)
            var paragraphElement = document.createElement('p');
            paragraphElement.innerHTML = addToolTips(paragraphText);
            storyContainer.appendChild(paragraphElement);

            // Add any custom classes derived from ink tags
            for(var i=0; i<customClasses.length; i++)
                paragraphElement.classList.add(customClasses[i]);

            // Fade in paragraph after a short delay
            showAfter(delay, paragraphElement);
            delay += 200.0;
        }

        // Create HTML choices from ink choices
        story.currentChoices.forEach(function(choice) {

            // Create paragraph with anchor element
            var choiceParagraphElement = document.createElement('button');
            choiceParagraphElement.classList.add("choice");
            choiceParagraphElement.innerHTML = `<a href='#'>${choice.text}</a>`
            storyContainer.appendChild(choiceParagraphElement);

            // Fade choice in after a short delay
            showAfter(delay, choiceParagraphElement);
            delay += 200.0;

            // Click on choice
            var choiceAnchorEl = choiceParagraphElement.querySelectorAll("a")[0].parentElement;
            choiceAnchorEl.addEventListener("click", function(event) {

                // Don't follow <a> link
                event.preventDefault();

                // Remove all existing choices
                removeAll(".choice");

                // Tell the story where to go next
                story.ChooseChoiceIndex(choice.index);

                // This is where the save button will save from
                savePoint = story.state.toJson();

                // Aaand loop
                continueStory();
            });
        });

        // Extend height to fit
        // We do this manually so that removing elements and creating new ones doesn't
        // cause the height (and therefore scroll) to jump backwards temporarily.
        storyContainer.style.height = contentBottomEdgeY()+"px";

        if( !firstTime )
            scrollDown(previousBottomEdge);

    }

    function restart() {
        story.ResetState();

        setVisible(".header", true);

        // set save point to here
        savePoint = story.state.toJson();

        continueStory(true);

        outerScrollContainer.scrollTo(0, 0);
    }

    // -----------------------------------
    // Various Helper functions
    // -----------------------------------

    // Fades in an element after a specified delay
    function showAfter(delay, el) {
        el.classList.add("hide");
        setTimeout(function() { el.classList.remove("hide") }, delay);
    }

    // Scrolls the page down, but no further than the bottom edge of what you could
    // see previously, so it doesn't go too far.
    function scrollDown(previousBottomEdge) {

        // Line up top of screen with the bottom of where the previous content ended
        var target = previousBottomEdge;

        // Can't go further than the very bottom of the page
        var limit = outerScrollContainer.scrollHeight - outerScrollContainer.clientHeight;
        if( target > limit ) target = limit;

        var start = outerScrollContainer.scrollTop;

        var dist = target - start;
        var duration = 300 + 300*dist/100;
        var startTime = null;
        function step(time) {
            if( startTime == null ) startTime = time;
            var t = (time-startTime) / duration;
            var lerp = 3*t*t - 2*t*t*t; // ease in/out
            outerScrollContainer.scrollTo(0, (1.0-lerp)*start + lerp*target);
            if( t < 1 ) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
    }

    // The Y coordinate of the bottom end of all the story content, used
    // for growing the container, and deciding how far to scroll.
    function contentBottomEdgeY() {
        var bottomElement = storyContainer.lastElementChild;
        return bottomElement ? bottomElement.offsetTop + bottomElement.offsetHeight : 0;
    }

    // Remove all elements that match the given selector. Used for removing choices after
    // you've picked one, as well as for the CLEAR and RESTART tags.
    function removeAll(selector)
    {
        var allElements = storyContainer.querySelectorAll(selector);
        for(var i=0; i<allElements.length; i++) {
            var el = allElements[i];
            el.parentNode.removeChild(el);
        }
    }

    // Used for hiding and showing the header when you CLEAR or RESTART the story respectively.
    function setVisible(selector, visible)
    {
        var allElements = storyContainer.querySelectorAll(selector);
        for(var i=0; i<allElements.length; i++) {
            var el = allElements[i];
            if( !visible )
                el.classList.add("invisible");
            else
                el.classList.remove("invisible");
        }
    }

    // Helper for parsing out tags of the form:
    //  # PROPERTY: value
    // e.g. IMAGE: source path
    function splitPropertyTag(tag) {
        var propertySplitIdx = tag.indexOf(":");
        if( propertySplitIdx != null ) {
            var property = tag.substr(0, propertySplitIdx).trim();
            var val = tag.substr(propertySplitIdx+1).trim();
            return {
                property: property,
                val: val
            };
        }

        return null;
    }

    // Loads save state if exists in the browser memory
    function loadSavePoint() {

        try {
            let savedState = window.localStorage.getItem('save-state');
            if (savedState) {
                story.state.LoadJson(savedState);
                return true;
            }
        } catch (e) {
            console.debug("Couldn't load save state");
        }
        return false;
    }

    // Detects which theme (light or dark) to use
    function setupTheme(globalTagTheme) {

        // load theme from browser memory
        var savedTheme;
        try {
            savedTheme = window.localStorage.getItem('theme');
        } catch (e) {
            console.debug("Couldn't load saved theme");
        }

        // Check whether the OS/browser is configured for dark mode
        var browserDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

        if (savedTheme === "dark"
            || (savedTheme == undefined && globalTagTheme === "dark")
            || (savedTheme == undefined && globalTagTheme == undefined && browserDark))
            document.body.classList.add("dark");
    }

    // Used to hook up the functionality for global functionality buttons
    function setupButtons(hasSave) {

        let rewindEl = document.getElementById("rewind");
        if (rewindEl) rewindEl.addEventListener("click", function(event) {
            removeAll("p");
            removeAll("button");
            removeAll("img");
            setVisible(".header", false);
            restart();
        });

		let undoEl = document.getElementById("undo");
        if (undoEl) undoEl.addEventListener("click", function(event) {
            removeAll("p");
            removeAll("button");
            removeAll("img");
            setVisible(".header", false);
            restart();
        });
		
        let saveEl = document.getElementById("save");
        if (saveEl) saveEl.addEventListener("click", function(event) {
            try {
                window.localStorage.setItem('save-state', savePoint);
                document.getElementById("reload").removeAttribute("disabled");
                window.localStorage.setItem('theme', document.body.classList.contains("dark") ? "dark" : "");
            } catch (e) {
                console.warn("Couldn't save state");
            }

        });

        let reloadEl = document.getElementById("reload");
        if (!hasSave) {
            reloadEl.setAttribute("disabled", "disabled");
        }
        reloadEl.addEventListener("click", function(event) {
            if (reloadEl.getAttribute("disabled"))
                return;

            removeAll("p");
            removeAll("button");
            removeAll("img");
            try {
                let savedState = window.localStorage.getItem('save-state');
                if (savedState) story.state.LoadJson(savedState);
            } catch (e) {
                console.debug("Couldn't load save state");
            }
            continueStory(true);
        });

        let themeSwitchEl = document.getElementById("theme-switch");
        if (themeSwitchEl) themeSwitchEl.addEventListener("click", function(event) {
            document.body.classList.add("switched");
            document.body.classList.toggle("dark");
        });
    }

})(storyContent);

function addToolTips(findText) {
    //Uppercase
    findText = findText.replace("Aggressive_tooltip", TOOLTIP_AGGRESSIVE);
    findText = findText.replace("Exposed_tooltip", TOOLTIP_EXPOSED);
    findText = findText.replace("Full_hand_tooltip", TOOLTIP_FULL_HAND);
    findText = findText.replace("Garrison_tooltip", TOOLTIP_GARRISON);
    findText = findText.replace("Mobile_tooltip", TOOLTIP_MOBILE);
    findText = findText.replace("Passive_tooltip", TOOLTIP_PASSIVE);
    findText = findText.replace("Preferred_tooltip", TOOLTIP_PREFERRED_CORRUPTION);
    findText = findText.replace("Preferred_tooltip_military", TOOLTIP_PREFERRED_MILITARY);
    findText = findText.replace("Primary_tooltip", TOOLTIP_PRIMARY);
    findText = findText.replace("Secondary_tooltip", TOOLTIP_SECONDARY);
    findText = findText.replace("Target_tooltip", TOOLTIP_TARGET);
    findText = findText.replace("Threat_tooltip", TOOLTIP_THREAT);
    findText = findText.replace("Value_tooltip", TOOLTIP_VALUE);
    //Lowercase
    findText = findText.replace("aggressive_tooltip", TOOLTIP_AGGRESSIVE_L);
    findText = findText.replace("exposed_tooltip", TOOLTIP_EXPOSED_L);
    findText = findText.replace("full_hand_tooltip", TOOLTIP_FULL_HAND_L);
    findText = findText.replace("garrison_tooltip", TOOLTIP_GARRISON_L);
    findText = findText.replace("mobile_tooltip", TOOLTIP_MOBILE_L);
    findText = findText.replace("passive_tooltip", TOOLTIP_PASSIVE_L);
    findText = findText.replace("preferred_tooltip", TOOLTIP_PREFERRED_CORRUPTION_L);
    findText = findText.replace("preferred_tooltip_military", TOOLTIP_PREFERRED_MILITARY_L);
    findText = findText.replace("primary_tooltip", TOOLTIP_PRIMARY_L);
    findText = findText.replace("secondary_tooltip", TOOLTIP_SECONDARY_L);
    findText = findText.replace("target_tooltip", TOOLTIP_TARGET_L);
    findText = findText.replace("threat_tooltip", TOOLTIP_THREAT_L);
    findText = findText.replace("value_tooltip", TOOLTIP_VALUE_L);
    return findText;
}