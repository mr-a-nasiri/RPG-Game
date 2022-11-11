const getHealthBarHTML = function (health) {
  const percent = health;
  return `
    <div class="health-bar-outer">
      <div class="health-bar-inner ${percent < 26 ? 'danger' : ''}" 
              style="width:${percent}%;">
      </div>
    </div>
  `;
};

export { getHealthBarHTML };
