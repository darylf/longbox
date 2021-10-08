module Types
  class ImageType < Types::BaseObject
    description 'A comic book or trade paperback'
    field :id, String, null: true
    field :extension, Types::ImageExtensionEnum, null: false
    field :height, Integer, null: true
    field :width, Integer, null: true
    field :url, String, null: false
  end
end
