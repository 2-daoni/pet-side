import AuthStore from './AuthStore';
import UiStore from './UiStore';

const rootStore = {
  uiStore: new UiStore(),
  authStore: new AuthStore(),
};

export default rootStore;
