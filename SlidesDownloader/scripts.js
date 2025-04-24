function call_func_from_tab(func) {
    chrome.tabs.query({ active: true, currentWindow: true }).then(function (tabs) {
        var activeTab = tabs[0];
        var activeTabId = activeTab.id;

        return chrome.scripting.executeScript({
            target: { tabId: activeTabId },
            func: func
        });

    }).catch(function (error) {
        document.getElementById('error_label').innerText = 'There was an error injecting script : \n' + error.message;
    });
}

function add_parameter() {
    const url = new URL(window.location.href);
    console.log("Add \"print-pdf\" as page param");
    url.searchParams.append('print-pdf', '');
    window.location.href = url.toString();
}

function open_print_view() {
    console.log("Start download");

    // Find the div with class 'reveal'
    const revealDiv = document.querySelector('div.reveal');

    // Find the container with id 'container'
    const container = document.querySelector('div.container');

    // Move the 'reveal' div under the container
    if (revealDiv && container) {
        container.appendChild(revealDiv);
        console.log('Div moved successfully!');
    } else {
        console.error('Either the reveal div or container was not found.');
    }

    // Remove all child elements except the last one in 'container'
    if (container) {
        while (container.children.length > 1) {
            container.removeChild(container.firstElementChild);
        }
        console.log('All children except the last one in container have been removed.');
    } else {
        console.error('Container not found.');
    }

    // Remove all child elements except the first one in 'reveal'
    if (revealDiv) {
        while (revealDiv.children.length > 1) {
            revealDiv.removeChild(revealDiv.lastElementChild);
        }
        console.log('All children except the first one in "reveal" have been removed.');
    } else {
        console.error('Reveal div not found.');
    }
}

function download() {
    window.print();
}

param_btn = document.getElementById("parameter_btn");
print_view_btn = document.getElementById("print_view_btn");
download_btn = document.getElementById("download_btn");

param_btn.onclick = function (ev) {
    param_btn.disabled = true;
    print_view_btn.disabled = false;
    download_btn.disabled = true;
    call_func_from_tab(add_parameter);
}
print_view_btn.onclick = function (ev) {
    param_btn.disabled = true;
    print_view_btn.disabled = true;
    download_btn.disabled = false;
    call_func_from_tab(open_print_view);
}
download_btn.onclick = function (ev) {
    param_btn.disabled = false;
    print_view_btn.disabled = true;
    download_btn.disabled = true;
    call_func_from_tab(download);
}
