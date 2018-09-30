import { shallowMount } from '@vue/test-utils';
import Timer from '@/components/Timer.vue';

describe('Timer.vue', () => {
  it('renders text', () => {
    const msg = 'Countdown:  Start Pause  MM:SS';
    const wrapper = shallowMount(Timer);
    expect(wrapper.text()).toMatch(msg);
  });
});
