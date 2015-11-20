class TagSerializer < ActiveModel::Serializer
  attributes :id, :title, :selected, :valence
end
