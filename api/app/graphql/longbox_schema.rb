class LongboxSchema < GraphQL::Schema
  use GraphQL::Pagination::Connections
  query Types::QueryType
  mutation Types::MutationType
end
