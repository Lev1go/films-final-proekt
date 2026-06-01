(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open]"),
        closeModalBtn: document.querySelector("[data-modal-close]"),
        modal: document.querySelector("[data-modal]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
    }
})();

(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open2]"),
        closeModalBtn: document.querySelector("[data-modal-close2]"),
        modal: document.querySelector("[data-modal2]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
    }
})();

(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open3]"),
        closeModalBtn: document.querySelector("[data-modal-close3]"),
        modal: document.querySelector("[data-modal3]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
    }
    
    
})();
// glib
(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open-g]"),
        closeModalBtn: document.querySelector("[data-modal-close-g]"),
        modal: document.querySelector("[data-modal-g]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle("is-hidden-g");
        document.body.classList.toggle("no-scroll-g");
    }
})();

(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open-g2]"),
        closeModalBtn: document.querySelector("[data-modal-close-g2]"),
        modal: document.querySelector("[data-modal-g2]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle("is-hidden2-g2");
        document.body.classList.toggle("no-scroll2-g2");
    }
})();

(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open-g3]"),
        closeModalBtn: document.querySelector("[data-modal-close-g3]"),
        modal: document.querySelector("[data-modal-g3]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle("is-hidden-g3");
        document.body.classList.toggle("no-scroll-g3");
    }
})();

(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open-g4]"),
        closeModalBtn: document.querySelector("[data-modal-close-g4]"),
        modal: document.querySelector("[data-modal-g4]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle("is-hidden-g4");
        document.body.classList.toggle("no-scroll-g4");
    }
})();