import HelloWorld from '../vite-project/src/components/HelloWorld.vue'

export default {
  title: 'HelloWorld',
  component: HelloWorld,
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { HelloWorld },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    // Story args can be mapped to keys in the returned object
    return { msg: args.msg };
  },
  // Then, those values can be accessed directly in the template
  template: '<HelloWorld :msg="msg" />',
});

export const Base = Template.bind({});

