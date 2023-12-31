import {test, expect} from "vitest";
import {mount} from "@vue/test-utils";
import CharacterCard from "../../components/CharacterCard.vue";
import { type CharacterObject } from '../../models/character.model';

test("mount the CharacterCard component", () => {
    const expectedName = "MonHeroToto";
    const character: CharacterObject= {
        id: 1,
        name: expectedName,
        description: "test",
        ressourceURI: "test",
        thumbnail: {
            path: "test",
            extension: "test",
        },
        series: {
            "items": [
              {
                resourceURI: "string",
                name: "string",
              }
            ]
          }
    };

    const wrapper = mount(CharacterCard, {
        props: {
            character,
        },
    });

    expect(wrapper.html()).toContain(expectedName);
});