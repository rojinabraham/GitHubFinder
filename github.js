class GitHub {
  constructor() {
    this.client_id = "5315fe38df148f595d5b";
    this.client_secret = "5db1cd5c7335b0017fb451250f2fbba13260483a";
    this.repo_count = 5;
    this.repo_sort = "created: asc";
  }
  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const profileData = await profileResponse.json();

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort=${this.repo_sort}client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const repoData = await repoResponse.json();

    return {
      profileData,
      repoData,
    };
  }
}
