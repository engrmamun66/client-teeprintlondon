export function useMenuState() {
  const state = reactive({
    isCollapse: false,
    isCollapseMenu: false,
    menu: 'dashboard',
    subMenu: '',
    showProfilePopup: false,
    isLoading: false,
    showRighttSideNavbar: false,
    clientX_start: 0,
    clientX_end: 0,
  });

  const menuGroups = ['students'];

  const get = (key = '') => {
    if (!key) return state;
    return key.split('.').reduce((result, item) => {
      return result?.[item];
    }, state);
  };

  const toggleSidebar = (force = null) => {
    state.isCollapse = force !== null ? force : !state.isCollapse;
  };

  const isCollapse = () => state.isCollapse;

  const activeMenu = (menu, subMenu = '') => {
    if (state.menu === menu) {
      state.isCollapseMenu = !state.isCollapseMenu;
    } else {
      state.isCollapseMenu = true;
    }
    state.menu = menu;
    state.subMenu = subMenu;
  };

  const activeSubMenu = (menu, subMenu = '') => {
    state.menu = menu;
    state.subMenu = subMenu;
  };

  const isCurrent = (menu, subMenu = '') => {
    if (menu && !subMenu) {
      return state.menu === menu && state.isCollapseMenu;
    }
    if (menu && subMenu) {
      return state.menu === menu && state.subMenu === subMenu && state.isCollapseMenu;
    }
    return false;
  };

  const toggleProfilePopup = () => {
    state.showProfilePopup = !state.showProfilePopup;
  };

  const toggleRightSideNavbar = () => {
    state.showRighttSideNavbar = !state.showRighttSideNavbar;
  };

  const onloadSelectMenu = () => {
    const route = useRoute();
    const menu = route.path.split('/').splice(1)[0];
    state.menu = menu;
    if (menuGroups.includes(menu)) state.isCollapseMenu = true;
  };

  const toggleNavBySwipe = (event) => {
    if (event.type === 'touchstart') {
      state.clientX_start = event.changedTouches[0].clientX;
    }
    if (event.type === 'touchend') {
      state.clientX_end = event.changedTouches[0].clientX;
      const movedPixel = state.clientX_end - state.clientX_start;

      if (state.clientX_end > state.clientX_start && movedPixel >= 120) {
        if (state.clientX_start <= 30) toggleSidebar(true);
      } else if (state.clientX_end < state.clientX_start && movedPixel <= 120) {
        toggleSidebar(false);
      }
    }
  };

  return {
    state,
    menuGroups,
    get,
    toggleSidebar,
    isCollapse,
    activeMenu,
    activeSubMenu,
    isCurrent,
    toggleProfilePopup,
    toggleRightSideNavbar,
    onloadSelectMenu,
    toggleNavBySwipe,
  };
}
