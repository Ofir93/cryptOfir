function renderSkelletons(location) {
  const skeletonCard = `<div class="col">
    <div class="card text-start justify-content-between placeholder-wave skeleton-card">
        <div id="label">
            <div class="card-body ps-4">
                <h5 class="card-titl mb-3 placeholder skel-title">Card title</h5>
                <h6 class="card-subtitle placeholder mb-3 text-muted skel-sub">Lorem ipsum dolor</h6>
                <a type="button" class="btn btn-card btn-success disabled skel-btn"></a>
            </div>
        </div>
        <div class="switchContainer pt-3 pe-2 placeholder-wave">
            <label class="switch">
                <input type="checkbox">
                <span class="slider round skel-slid"></span>
            </label>
        </div>
    </div>
    </div>
    `
  for (let i = 0; i < 15; i++) {
    location.append(skeletonCard)
  }
}
export { renderSkelletons }
