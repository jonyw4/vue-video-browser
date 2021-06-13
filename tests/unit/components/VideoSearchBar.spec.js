import wait from "wait";
import { mount } from "@vue/test-utils";
import VideoSearchBar from "../../../src/components/VideoSearchBar.vue";

describe("components :: VideoSearchBar", () => {
  const defaultProps = {
    serviceId: "YOUTUBE",
    serviceList: [
      {
        id: "YOUTUBE",
        name: "Youtube",
      },
      {
        id: "VIMEO",
        name: "Vimeo",
      },
    ],
  };
  it("should render a video search bar with success", () => {
    const wrapper = mount(VideoSearchBar, {
      propsData: defaultProps,
    });
    const select = wrapper.find("select");
    expect(select.text()).toContain("Youtube");
  });
  it("should emit a onChangeService when change service", async () => {
    const wrapper = mount(VideoSearchBar, {
      propsData: defaultProps,
    });
    const options = wrapper.find("select").findAll("option");
    await options.at(1).setSelected();
    const checkedOption = wrapper.find("option:checked").element.value;
    expect(checkedOption).toBe("VIMEO");
    expect(wrapper.emitted().onChangeService).toBeTruthy();
    expect(wrapper.emitted().onChangeService[0][0]).toBe("VIMEO");
  });
  it("should emit a onInputSearch when change service", async () => {
    const searchTerm = "How to create an Vue Application";
    const wrapper = mount(VideoSearchBar, {
      propsData: defaultProps,
    });
    const input = wrapper.find("input");
    await input.setValue(searchTerm);
    await wait(400);
    expect(wrapper.emitted().onInputSearch).toBeTruthy();
    expect(wrapper.emitted().onInputSearch[0][0]).toBe(searchTerm);
  });
});
