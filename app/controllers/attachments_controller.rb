# Series controller
class AttachmentsController < ApplicationController
  def destroy
    attachment = ActiveStorage::Attachment.find(params[:id])
    attachment.purge
    flash[:notice] = 'Attachment has been removed'
    redirect_to redirect_url
  end

  private

  def redirect_url
    root_path unless params[:redirect].start_with?('/')
    params[:redirect]
  end
end