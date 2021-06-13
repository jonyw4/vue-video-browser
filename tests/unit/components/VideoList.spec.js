import { mount } from "@vue/test-utils";
import VideoList from "../../../src/components/VideoList.vue";

describe("components :: VideoList", () => {
  const defaultProps = {
    list: [
      {
        id: "1",
        title: "How to create a Vue app",
        thumbnailUrl: "http://img.com",
      },
      {
        id: "2",
        title: "How to create a React app",
        thumbnailUrl: "http://img.com",
      },
    ],
  };
  it("should render a VideoList component", () => {
    const wrapper = mount(VideoList, {
      propsData: defaultProps,
    });
    const title = wrapper.find("h4");
    const lists = wrapper.findAll("li");
    expect(title.text()).toBe("Video List (2)");
    expect(lists.at(0).text()).toBe("How to create a Vue app");
    expect(lists.at(1).text()).toBe("How to create a React app");
  });
  it("should emit onClickVideo when click on list item", async () => {
    const wrapper = mount(VideoList, {
      propsData: defaultProps,
    });
    const lists = wrapper.findAll("li");
    await lists.at(0).trigger("click");
    expect(wrapper.emitted().onClickVideo).toBeTruthy();
    expect(wrapper.emitted().onClickVideo[0][0]).toEqual(defaultProps.list[0]);
  });
});
