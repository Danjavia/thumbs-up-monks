// @vitest-environment nuxt
import { mountSuspended } from "@nuxt/test-utils/runtime";
import { describe, it, expect } from "vitest";
import ItemList from "~/components/Item/Grid.vue";

describe("ItemList", () => {
  const mockProps = {
    id: "1",
    name: "Kanye West",
    description: "Born in Atlanta and raised in Chicago...",
    category: "entertainment",
    picture: "kanye.png",
    lastUpdated: "2020-03-10T23:08:57.892Z",
    votes: {
      positive: 23,
      negative: 36,
    },
  };

  it("renders correctly", async () => {
    const component = await mountSuspended(ItemList, {
      props: mockProps,
    });

    expect(component.text()).toContain("Kanye West");
    expect(component.text()).toContain(
      "Born in Atlanta and raised in Chicago...",
    );
  });

  // it("increments positive votes", async () => {
  //   const component = await mountSuspended(ItemList, {
  //     props: mockProps,
  //   });
  //
  //   const voteButton = component.find(".like-btn");
  //   await voteButton.trigger("click");
  //
  //   const positiveVotes = component.vm.positiveVotes;
  //   expect(positiveVotes).toBe(25); // Incremented twice
  // });

  // it("emits vote event", async () => {
  //   const component = await mountSuspended(ItemList, {
  //     props: mockProps,
  //   });
  //
  //   const voteButton = component.find(".like-btn");
  //   await voteButton.trigger("click");
  //
  //   expect(component.emitted().vote).toBeTruthy();
  //   expect(component.emitted().vote[0]).toEqual([
  //     { id: "1", type: "positive" },
  //   ]);
  // });
});
