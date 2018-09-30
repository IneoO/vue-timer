import { shallowMount } from '@vue/test-utils';
import SpeedSelector from '@/components/SpeedSelector.vue';

describe('SpeedSelector.vue', () => {
  it('getClass', () => {
    const wrapper = shallowMount(SpeedSelector, {
      propsData: {
        speedValues: [{
          value: 1,
          text: '1x',
        }, {
          value: 2,
          text: '2x',
        }],
        value: 1,
      },
    });
    expect(wrapper.vm.getClass(0)).toEqual({
      btn: true,
      selected: true,
    });
  });

  it('selectSpeed', () => {
    const wrapper = shallowMount(SpeedSelector, {
      propsData: {
        speedValues: [{
          value: 1,
          text: '1x',
        }, {
          value: 2,
          text: '2x',
        }],
        value: 1,
      },
    });
    wrapper.vm.selectSpeed(0);
    expect(wrapper.vm.value).toEqual(1);
  });
});
