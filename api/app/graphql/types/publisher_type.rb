module Types
  class PublisherType < Types::BaseObject
    description 'A book publishing company'
    field :id, ID, null: false
    field :book_count, Int, null: false
    field :created_at, Types::DateTimeType, null: false
    field :logo, Types::ImageType, null: true do
      argument :size, Types::ImageSizeEnum, required: false
      argument :type, Types::ImageExtensionEnum, required: false
    end
    field :name, String, null: false
    field :series_count, Int, null: false
    field :series, [Types::SeriesType], null: false do
      argument :limit, Integer, required: false
      argument :sort_by, Types::SortAttributes, required: false
    end
    field :updated_at, Types::DateTimeType, null: false

    def series(limit: nil, sort_by: nil)
      series = object.series
      unless sort_by.nil?
        series = series.order(sort_by[:field])
        series = series.reverse if sort_by[:direction] == "DESC"
      end
      limit.nil? ? series : series.limit(limit)
    end
  end
end
