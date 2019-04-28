var username;
var reponame;
var title;

function editOnGithub() {
    if (updateVars()) {
        window.open(`https://github.com/${username}/${reponame}/edit/master/README.md`);
    } else {
        UIkit.notification({
            message: 'Please Fill Gihub Username and Github Repository Name',
            pos: 'bottom-right',
            status: 'danger'
        });
    }
}

function download() {
    if (updateVars()) {

    } else {
        UIkit.notification({
            message: 'Please Fill Gihub Username and Github Repository Name',
            pos: 'bottom-right',
            status: 'danger'
        });
    }
}

function updateVars() {
    username = document.getElementById("username").value;
    reponame = document.getElementById("reponame").value;
    title = document.getElementById("title").value;
    return username != "" && reponame != "";
}

function clipboard(str) {
    var el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style = {
        position: 'absolute',
        left: '-9999px'
    };
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}