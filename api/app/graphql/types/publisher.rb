module Types
  class PublisherType < Types::BaseObject
    description 'A book publishing company'

    field :id, ID, null: false
    field :name, String, null: false
    field :series, [Types::Series], null: false
  end
end
