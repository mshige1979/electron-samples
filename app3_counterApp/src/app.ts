$(() => {
    const store = window.store;

    const _count = store.get("count");
    console.log(`_count:`, _count);
    let count: number = _count === undefined ? 0 : Number(_count);

    store.set("count", count);
    $(".countBlock .count").text(count);

    $(".btn-count").on("click", () => {
        count++;

        store.set("count", count);
        $(".countBlock .count").text(count);
    });

    $(".btn-clear").on("click", () => {
        count = 0;

        store.set("count", count);
        $(".countBlock .count").text(count);
    });
});
