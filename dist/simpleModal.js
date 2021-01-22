function simpleModal(options = null) {
    const backgroundElement = $("<div class='simple-modal-bg'></div>");
    const AllModals = $("[simple-modal]");
    AllModals.on("click", function (e) {
        $("body").append(backgroundElement)
        let clickedElement = $(this);
        let targetModal = $("#" + clickedElement.attr("simple-modal"));
        targetModal.addClass("simple-active")
    });
    $("body").on("click",".simple-modal-bg", function (e) {
        console.log("hi")
        $("simple-modal").removeClass("simple-active")
        $(this).remove()
    });
    $("body").on("click",".simple-close", function (e) {
        console.log("hi")
        $("simple-modal").removeClass("simple-active")
        $(".simple-modal-bg").remove()
    });
}
simpleModal();