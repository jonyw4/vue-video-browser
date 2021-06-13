import { mount } from "@vue/test-utils";
import VideoPlayer from "../../../src/components/VideoPlayer.vue";

describe('components :: VideoPlayer', () => {
  it('should render a VideoPlayer component', () => {
    const wrapper = mount(VideoPlayer, {
      propsData: {
        title: "How to create a Vue app",
        description: "A series of video to how to create an web app vue application",
        embedUrl: "http://fakevideobrowser.com/video/abcd"
      }
    })
    const title = wrapper.find("h1")
    expect(title.text()).toBe("How to create a Vue app");
  });
});