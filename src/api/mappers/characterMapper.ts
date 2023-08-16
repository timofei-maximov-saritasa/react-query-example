import { type Character } from '../../models/character.ts';
import { type CharacterImage } from '../../models/characterImage.ts';
import { type CharacterDto } from '../dto/characterDto.ts';
import { type CharacterImageDto } from '../dto/characterImageDto.ts';

export namespace CharacterMapper {
  export function fromDto(dto: CharacterDto): Character {
    return {
      about: dto.about,
      images: {
        jpg: imageFromDto(dto.images.jpg),
        webp: imageFromDto(dto.images.webp),
      },
      malId: dto.mal_id,
      name: dto.name,
      nameKanji: dto.name_kanji,
      nicknames: dto.nicknames,
      url: dto.url,
    };
  }

  export function imageFromDto(dto: CharacterImageDto): CharacterImage {
    return {
      imageUrl: dto.image_url,
      smallImageUrl: dto.small_image_url,
    };
  }
}
